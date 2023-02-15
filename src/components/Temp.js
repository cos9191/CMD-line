import React, { useRef } from 'react';

function MoveCursorButton() {
    const textAreaRef = useRef(null);

    const moveCursorToNextLine = () => {
        if (textAreaRef.current) {
            const { value, selectionStart } = textAreaRef.current;
            const nextLineIndex = value.indexOf('\n', selectionStart);
            if (nextLineIndex > -1) {
                textAreaRef.current.setSelectionRange(nextLineIndex + 1, nextLineIndex + 1);
            }
        }
    };

    return (
        <div>
            <textarea ref={textAreaRef} />
            <button onClick={moveCursorToNextLine}>Move cursor to next line</button>
        </div>
    );
}

export default MoveCursorButton;