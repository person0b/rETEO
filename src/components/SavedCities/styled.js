import styled from 'styled-components';

const SavedCities = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 10px;
`;

SavedCities.Title = styled.h2`
  margin: 40px 0;

  font-size: 20px;

  text-align: center;
  text-transform: uppercase;
`;

SavedCities.List = styled.ul`
  display: flex;
  margin: 0 0 40px;
  padding: 0;

  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;

  list-style: none;
`;

SavedCities.Item = styled.li`
  margin: 0 10px 20px;
`;

export default SavedCities;
