import { Select } from "@showtime-xyz/universal.select";
import { View } from "@showtime-xyz/universal.view";

import { Collection } from "app/hooks/api-hooks";
import { getSortFields } from "app/utilities";

type FilterProps = {
  onCollectionChange: (id: number) => void;
  collections: Collection[];
  onSortChange: (id: number) => void;
  collectionId: number;
  sortId: number;
};
// Todo: Select support web.
export const ProfileListFilter = ({
  onCollectionChange,
  collections,
  onSortChange,
  collectionId,
  sortId,
}: FilterProps) => {
  const sortFields = getSortFields();

  return (
    <View tw="flex-row justify-around">
      <Select
        value={collectionId}
        onChange={onCollectionChange}
        options={collections.map((collection) => ({
          value: collection.collection_id,
          label: collection.collection_name,
        }))}
        size="small"
        placeholder="Collection"
        tw="mr-2"
      />
      <Select
        value={sortId}
        onChange={onSortChange}
        options={sortFields}
        size="small"
        placeholder="Sort"
      />
      {/* <Pressable
        style={tw.style(
          "bg-black rounded-full dark:bg-white items-center justify-center flex-row px-3 py-2"
        )}
      >
        <Text tw="text-white text-center dark:text-gray-900 font-bold text-xs">
          Customize
        </Text>
      </Pressable> */}
    </View>
  );
};
