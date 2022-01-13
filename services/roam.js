import Roam from 'roam-reactnative';
import AsyncStorage from '@react-native-community/async-storage';

const Configuration = {
  eventListenerStatus: true,
  geofenceEvents: false,
  locationEvents: true,
  locationListenerStatus: true,
  movingGeofenceEvents: false,
  tripsEvents: true,
};

const ErrorCodes = {
  InvalidUserId: 'GS402',
};

const createTestUser = async () => {
  return new Promise((resolve, reject) => {
    const handleCreateUserCallback = async (success) => {
      AsyncStorage.setItem('userId', success.userId);
      resolve(success.userId);
    };

    const handleCreateUserError = (error) => {
      reject(error);
    };

    Roam.createUser(
      'test-user',
      handleCreateUserCallback,
      handleCreateUserError,
    );
  });
};

const createTestTrip = async () => {
  return new Promise((resolve, reject) => {
    const handleCreateTripCallback = async success => {
      AsyncStorage.setItem('tripId', success.id);
      resolve(success.id);
    };

    const handleCreateTripError = error => {
      reject(error);
    };

    Roam.createTrip(true, handleCreateTripCallback, handleCreateTripError);
  });
};

const loadTestUser = async (id) => {
  return new Promise((resolve, reject) => {
    const handleLoadUserCallback = async (success) => {
      resolve(success.userId);
    };

    const handleLoadUserError = (error) => {
      reject(error.errorCode);
    };
    Roam.getUser(id, handleLoadUserCallback, handleLoadUserError);
  });
};

const toggleTrip = async (id) => {
  return new Promise((resolve, reject) => {
    const handleLoadTripCallback = async (success) => {
      console.log(success);
      resolve('STARTED');
    };

    const handleLoadTripError = (error) => {
      console.log(error);
      reject(error);
    };
    Roam.startTrip(
      id,
      'test-trip',
      handleLoadTripCallback,
      handleLoadTripError,
    );
  });
};

const getTripSummary = async id => {
  return new Promise((resolve, reject) => {
    const handleGetTripSummaryCallback = async success => {
      resolve(success);
    };

    const handleGetTripSummaryError = error => {
      console.log(error);
      reject(error);
    };
    Roam.getTripSummary(
      id,
      handleGetTripSummaryCallback,
      handleGetTripSummaryError,
    );
  });
};

const deleteTrip = async id => {
  return new Promise((resolve, reject) => {
    const handleGetTripSummaryCallback = async success => {
      resolve(success);
    };

    const handleGetTripSummaryError = error => {
      console.log(error);
      reject(error);
    };
    Roam.deleteTrip(
      id,
      handleGetTripSummaryCallback,
      handleGetTripSummaryError,
    );
  });
};

export const roam = {
  createTestUser,
  createTestTrip,
  loadTestUser,
  toggleTrip,
  getTripSummary,
  deleteTrip,
  Configuration,
  ErrorCodes,
};
