import { AxiosError } from "axios";
import { create } from "zustand";

import { ISpaceOverview } from "@/interfaces/common";
import { fetchSpaceOverViewData } from "@/services/space-overview";

interface ISpaceOverviewData {
  data: ISpaceOverview | Record<string, never>;
  isLoading?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  error?: AxiosError | Error | null;
  fetchSpaceOverview: () => void;
}

export const useSpaceOverviewDataStore = create<ISpaceOverviewData>()(
  (set, get) => ({
    data: {},
    isLoading: false,
    isError: false,
    isSuccess: false,
    error: null,
    fetchSpaceOverview: async () => {
      try {
        set(() => ({ isLoading: true }));
        const { data, isError, isSuccess, error } =
          await fetchSpaceOverViewData();

        set(() => ({
          isLoading: false,
          isSuccess: isSuccess,
          error: error,
          isError: isError,
        }));

        if (isSuccess) {
          set(() => ({
            data: data || {},
          }));
        }
      } catch (err: any) {
        set(() => ({
          isError: true,
          isSuccess: false,
          error: err,
          data: {},
          isLoading: false,
        }));
      }
    },
  }),
);
