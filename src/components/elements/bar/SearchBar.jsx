import styled from 'styled-components';

const SearchInputBox = styled.div`
	display: flex;
	border: 1px solid #ebebeb;
	color: #a5a5a5;
	justify-content: center;
	align-items: center;
`;

const SearchBar = () => {
	return (
		<SearchInputBox>
			<img src='/Icons/Basic/Search.svg' />
			<input style={{ border: 0, fontWeight: 400 }} placeholder='search here' />
		</SearchInputBox>
	);
};

export default SearchBar;
