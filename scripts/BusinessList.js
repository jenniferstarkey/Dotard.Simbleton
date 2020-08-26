import { businessInfo, newYorkBusinesses, manufacturingBusinesses } from "./BusinessProvider.js"
import { info, infoNY, companyType } from "./Business.js"

const contentTarget = document.querySelector(".active")

export const businessList = () => {
    const businessArray = businessInfo()
    contentTarget.innerHTML = "<h2>Active Businesses</h2>"

    businessArray.forEach(
        (businessObj) => {
            contentTarget.innerHTML += info(businessObj)
        }
    )
}

const contentTargetNY = document.querySelector(".businessList--newYork")

export const businessListNY = () => {
    const businessArrayNY = newYorkBusinesses
    contentTargetNY.innerHTML = "<h2>New York Businesses</h2>"

    businessArrayNY.forEach(
        (businessObj) => {
            contentTargetNY.innerHTML += infoNY(businessObj)
        }
    );
}
const contentTargetType = document.querySelector(".manufacturing")

export const industry = () => {
    const industryArray = manufacturingBusinesses
    contentTargetType.innerHTML = "<h2>Manufacturing Businesses</h2>"

    industryArray.forEach(
        (businessObj) => {
            contentTargetType.innerHTML += companyType(businessObj)
        }
    );
}