import "./MainContent.css"
import MainInterface from "../main interface/MainInterface"
import Prefume from "../prefume/Prefume"
import Review from "../Review"
import BestPerfume from "../BestPerfume"

function MainContent({ activePage }) {
    if (activePage === "الرئيسية") {
        return (
           <MainInterface />
        )
    }
    else if (activePage === "العطور") {
        return (
            <Prefume />
        )
    }

        else if (activePage === "آراء المستخدمين") {
        return (
            <Review />
        )
    }

        else if (activePage === "أفضل العطور") {
        return (
            <BestPerfume />
        )
    }

}

export default MainContent;