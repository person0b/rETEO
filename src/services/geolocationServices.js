const getUserLocation = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      location => resolve(location.coords),
      error => reject(error)
    );
  });

export default getUserLocation;
