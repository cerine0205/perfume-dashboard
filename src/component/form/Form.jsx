import "./Form.css";
function Form({ editingPrefume, formData, handleInputChange, handleSubmit, closeForm }) {
    return (
        <div className="model-overlay">
            <div className="model">
                <h1 className="model-title">{editingPrefume ? "تعديل" : "إضافة"}</h1>
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>الصورة</label>
                        <input className="file-input hover-move" id="imageUpload" type="file" name="image" accept="image/*" onChange={handleInputChange} />
                    </div>

                    <label htmlFor="imageUpload" className="file-btn">اختر الملف</label>

                    <div className="form-group">
                        <label >الاسم</label>
                        <input className="hover-move" type="text" name="name" value={formData.name} onChange={handleInputChange} onKeyPress={(e) => { if (!isNaN(e.key)) e.preventDefault() }} required />
                    </div>

                    <div className="form-group">
                        <label >السعر</label>
                        <input className="hover-move" type="number" name="price" value={formData.price} onChange={handleInputChange} min="0" required />
                    </div>

                    <div className="form-group">
                        <label>الطلبات</label>
                        <input className="hover-move" type="number" name="orders" value={formData.orders} onChange={handleInputChange} min="0" required />
                    </div>

                    <div className="form-group">
                        <label>الحالة</label>
                        <select className="hover-move" name="inStock" value={String(formData.inStock)} onChange={handleInputChange} required>
                            <option value="" >اختر الحالة</option>
                            <option value="true">متوفر</option>
                            <option value="false">غير متوفر</option>
                        </select>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn-save hover-move">{editingPrefume ? "تعديل" : "إضافة"}</button>
                        <button className="btn-cancel hover-move" onClick={closeForm}>الغاء</button>
                    </div>

                </form>
            </div>
        </div>

    )
}

export default Form;