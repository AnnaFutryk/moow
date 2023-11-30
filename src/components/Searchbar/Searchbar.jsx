import { Input, SearchButton, SearchForm } from "./Searchbar.styled";
import { ReactComponent as SearchSvg } from "../../images/search.svg";

const Searchbar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <SearchSvg />
        </SearchButton>

        <Input name="searchText" type="text" autoComplete="off" autoFocus />
      </SearchForm>
    </>
  );
};

export default Searchbar;
