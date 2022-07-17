import styled from 'styled-components';

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	margin-top: 64px;
	width: 100%;
	margin-left: 120px;
	/* align-items: center; */
`;

export const CardWrapper = styled.div`
	display: flex;
	width: 1202px;
	justify-content: space-between;
	align-items: center;
`;

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 72px;
`;

export const ImageUploadBox = styled.div`
	display: flex;
	width: 795px;
	height: 56px;
	border: 1px dashed #ebebeb;
	justify-content: center;
	align-items: center;

	& > input[type='file'] {
		display: none;
	}
`;
