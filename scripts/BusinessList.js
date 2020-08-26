import { businessInfo } from "./BusinessProvider.js"
import { info } from "./Business.js"

const contentTarget = document.querySelector(".businessInfo")

export const businessList = () => {
    const businessArray = businessInfo()
    contentTarget.innerHTML = "<h2>Active Businesses</h2>"

    businessArray.forEach(
        (businessObj) => {
            contentTarget.innerHTML += info(businessObj)
        }
    )
}
