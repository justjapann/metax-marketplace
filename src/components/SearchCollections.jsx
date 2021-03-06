import { Select } from "antd";
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { getCollectionsByChain } from "helpers/collections";
import "../style.css";

function SearchCollections({ setInputValue }) {
  const { Option } = Select;
  const { chainId } = useMoralisDapp();
  const NFTCollections = getCollectionsByChain(chainId);

  function onChange(value) {
    setInputValue(value);
  }

  return (
    <>
      <Select
        showSearch
        style={{ width: "526px", marginRight: "20px" }}
        placeholder="Find a Collection"
        optionFilterProp="children"
        onChange={onChange}
      >
        {NFTCollections &&
          NFTCollections.map((collection, i) => (
            <Option value={collection.addrs} key={i}>
              {collection.name}
            </Option>
          ))}
      </Select>
    </>
  );
}
export default SearchCollections;
