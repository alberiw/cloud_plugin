import React from 'react';
import { Checkbox } from '@atlaskit/checkbox';
import EditorEditIcon from '@atlaskit/icon/glyph/editor/edit';
import EditorRemoveIcon from '@atlaskit/icon/glyph/editor/remove';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
`;

const Item = styled(Checkbox)`
    text-decoration: ${props => (props.done ? 'line-through' : 'auto')};
`;

const TodoItem = props => {
    const { onToggle, onDelete, value, done } = props;
    return (
        <Wrapper>
            <Item onChange={onToggle} isChecked={done} label={value} />
            <div>
                <EditorEditIcon label="edit" size="medium" />
            </div>
            <div onClick={onDelete}>
                <EditorRemoveIcon label="delete" size="medium" />
            </div>
            {/*<input type="checkbox" onChange={onToggle} checked={done} />*/}
            {/*<Item onClick={onToggle} done={done}>*/}
            {/*    {value}*/}
            {/*</Item>*/}
        </Wrapper>
    );
};

export default TodoItem;
