export const getSavedLocationIds = () => {
    const savedLocationIds = localStorage.getItem('saved_locations')
        ? JSON.parse(localStorage.getItem('saved_locations'))
        : [];
    return savedLocationIds;
};

export const savedLocationIds = (locationIdArr) => {
    if (locationIdArr.length) {
        localStorage.setItem('saved_locations', JSON.stringify(locationIdArr));
        console.log("saved locations", locationIdArr);
    } else{
        localStorage.removeItem('saved_locations');
    }
};

export const removeLocationId = (locationId) => {
    const savedLocationIds = localStorage.getItem('saved_locations')
        ? JSON.parse(localStorage.getItem('saved_locations'))
        : null;
    
    if (!savedLocationIds) {
    return false;
    }

    const updatedSavedLocationIds = savedLocationIds?.filter((savedLocationId) => savedLocationId !== locationId);
    localStorage.setItem('saved_locations', JSON.stringify(updatedSavedLocationIds));
  
    return true
};