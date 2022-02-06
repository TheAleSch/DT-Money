import styled from 'styled-components';

export const Container = styled.header`
width: 100vw;
background: var(--blue);
`

export const Content = styled.div`
background: var(--blue);
max-width: 1120px;
margin: 0 auto;

padding: 2rem 1rem 10rem;
display: flex;
align-items: center;
justify-content: space-between;

button {
    font-size: 1rem;
    color: white;
    background:  var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s ease-in-out;

    &:hover {
        filter: brightness(0.9);
    }
}
`