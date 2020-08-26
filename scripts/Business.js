export const info = (businessObj) =>{
return`
    <section class="info">
        <h2 class="business_name">${businessObj.companyName}</h2>
        <div class="street_address">${businessObj.addressFullStreet}</div>
        <div class="full_address">${businessObj.addressCity} ${businessObj.addressStateCode} ${businessObj.addressZipCode}</div>

    </section>
    `
}