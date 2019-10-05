import React from 'react';
import Button from '@atlaskit/button';
import Textfield from '@atlaskit/textfield';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 40px;
    display: flex;
`;

const StyledButton = styled(Button)`
    height: 100% !important;
`;

const NewTodoForm = props => {
    const { onChange, onSubmit, value } = props;
    return (
        <Wrapper>
            <Textfield type="text" onChange={onChange} value={value} />
            <StyledButton onClick={onSubmit}>Add</StyledButton>
        </Wrapper>
    );
};

export default NewTodoForm;
