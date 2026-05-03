import type { ChannelPageData } from "@/components/custom/channel/types";
import floralparkhvac  from "./floralparkhvac";

// Only Floral Park HVAC's own channel page is active.
// Legacy template channel data files are retained on disk but not imported or mapped.
const channelDataMap: Record<string, ChannelPageData> = {
  floralparkhvac,
};

export function getChannelData(slug: string): ChannelPageData | null {
  return channelDataMap[slug] ?? null;
}

export { channelDataMap };
