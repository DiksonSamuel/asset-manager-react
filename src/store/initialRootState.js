import { UserDashboardData } from "../configs/dummyData";

const initialRootState = {
  dashboad: {
    userDashboardData: UserDashboardData
  },
  asset: {
    assets: [],
    calculatePercentageLoader: false
  },
  common: {

  }
}

export default initialRootState;