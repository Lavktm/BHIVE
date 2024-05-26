import axios from "axios";

import { siteConfig } from "@/constants/config";
import { ISpaceOverview } from "@/interfaces/common";

interface IfetchSpaceOverviewDataResponse {
  data: ISpaceOverview | Record<string, never>;
  isError: boolean;
  isSuccess: boolean;
  error: Error | null;
}

export async function fetchSpaceOverViewData(): Promise<IfetchSpaceOverviewDataResponse> {
  try {
    const response = await axios.get(`${siteConfig.appApiUrl}/space-overview`);
    return {
      data: { entries: response.data },
      isError: false,
      isSuccess: true,
      error: null,
    };
  } catch (error: any) {
    return {
      data: {},
      isError: true,
      isSuccess: false,
      error: error,
    };
  }
}
