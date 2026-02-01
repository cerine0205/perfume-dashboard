import { perfumesMock } from "../../data/perfumesMock";
import { useState } from "react";
import "./Prefume.css"
import Form from "../form/form";

function Prefume() {
    const [prefumeData, setPrefumeData] = useState(perfumesMock);
    const [formData, setFormData] = useState({
        image: "",
        name: "",
        price: "",
        orders: "",
        inStock: ""
    });
    const [showForm, setShowForm] = useState(false);
    const [editingPrefume, setEditingPrefume] = useState(null); // ما فيه عنصر يتعدل
    const [selectedState, setSelectedState] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    const deletePrefume = (id) => {
        setPrefumeData(prefumeData.filter((item) => item.id != id))
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "image") {
            const file = e.target.files[0];
            if (!file) return;

            const imageUrl = URL.createObjectURL(file);
            setFormData((prev) => ({
                ...prev,
                image: imageUrl,

            }));
            return;
        }


        setFormData({
            ...formData,
            [name]:
                name === "inStock"
                    ? value === "true" // يحوّلها Boolean
                    : value,
        });
    };

    const openEditForm = (prefume) => {
        setShowForm(true);
        setEditingPrefume(prefume.id); // العنصر اللي بنحذفه
        setFormData({
            image: prefume.image,
            name: prefume.name,
            price: prefume.price,
            orders: prefume.orders,
            inStock: prefume.inStock
        });

    }


    const openAddForm = () => {
        setShowForm(true);
        setEditingPrefume(null); // ما فيه عنصر يتعدل
        setFormData({
            image: "",
            name: "",
            price: "",
            orders: "",
            inStock: ""
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingPrefume) { // edit فيه عنصر يتعدل
            setPrefumeData(prefumeData.map((item) =>
                item.id === editingPrefume ?
                    {
                        ...item,
                        image: formData.image,
                        name: formData.name,
                        price: formData.price,
                        orders: formData.orders,
                        inStock: formData.inStock
                    } : item))
        }

        else { // ما فيه عنصر يتعدل add
            const newPrefume = {
                id: prefumeData.length + 1,
                image: formData.image,
                name: formData.name,
                price: formData.price,
                orders: formData.orders,
                inStock: formData.inStock,
            }

            setPrefumeData([...prefumeData, newPrefume])

        }
        closeForm();
    };

    const closeForm = () => {
        setEditingPrefume(false);
        setFormData({
            image: "", name: "", price: "", orders: "", inStock: ""
        });
        setShowForm(false);
    };

    const filterdByState =
        selectedState === "all"
            ? prefumeData
            : prefumeData.filter((p) => p.inStock === (selectedState === "true"))


    const filterPerfumeData =
        filterdByState.filter((p) =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase()));



    return (

<>
       {showForm && <Form formData={formData} handleInputChange={handleInputChange}
                handleSubmit={handleSubmit} closeForm={closeForm} editingPrefume={editingPrefume} />}

        <div>

            <div className="table-header">
                <div className="filters">
                    <select className="filter-select hover-move"
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}>
                        <option value="all">الكل</option>
                        <option value="true">متوفر</option>
                        <option value="false">غير متوفر</option>
                    </select>
                    <input type="text"
                        className="filter-search hover-move"
                        placeholder="بحث بإسم العطر..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} />
                </div>

                <button className="add-btn" onClick={openAddForm}>إضافة عطر</button>
            </div>

            <table className="prefume-table hover-move">
                <thead>
                    <tr>
                        <th>إجراءات</th>
                        <th>الحالة</th>
                        <th>الطلبات</th>
                        <th>السعر</th>
                        <th>اسم العطر</th>
                        <th>الصورة</th>
                    </tr>
                </thead>

                <tbody>
                    {filterPerfumeData.map((item) =>
                        <tr key={item.id}>
                            <td className="actions">
                                <button className="btn-delete" onClick={() => deletePrefume(item.id)}>حذف</button>
                                <button className="btn-edit" onClick={() => openEditForm(item)} >تعديل</button>
                            </td>
                            <td>
                                <span className={item.inStock ? "badge active" : "badge inactive"}>
                                    {item.inStock ? "متوفر" : "غير متوفر"}
                                </span> </td>
                            <td>{item.orders}</td>
                            <td>{item.price}</td>
                            <td>{item.name}</td>
                            <td><img src={item.image} alt={item.name} className="perfume-img" /></td>
                        </tr>
                    )}
                </tbody>

            </table>
        </div>
        </> 
    )
}

export default Prefume;