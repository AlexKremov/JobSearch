import styled from 'styled-components';

const Body = styled.div`
    display: flex;
`;

type Props = {
  name: string
  rating: number
};

function CompaniesLikes({ name, rating }: Props) {
  return (
    <Body>
      <h3>
        {name}
        :
      </h3>
      <h4>{rating}</h4>
    </Body>
  );
}

export default CompaniesLikes;
