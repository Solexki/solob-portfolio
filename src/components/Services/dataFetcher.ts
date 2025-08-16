import { collection, getDocs } from "firebase/firestore";
import { db } from "@/components/Services/firebase";

type FeedEntry = {
  id: string;
  post_tag?: string;
  post_title?: string;
  message?: string;
  post_image?: string;
  date?: string;
  pinned?: boolean;
  published?: boolean;
};

export async function dataFetcher(): Promise<FeedEntry[]> {
  const feedCollection = collection(db, "feed");
  // Fetch entries from Firestore (not implemented here)
  const querySnapshot = await getDocs(feedCollection);
  const data: FeedEntry[] = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<FeedEntry, "id">),
  }));

  return data;
}
