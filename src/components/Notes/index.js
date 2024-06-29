import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'
import NoteItem from '../NoteItem'
import {
  NotesMainContainer,
  NotesContainer,
  NotesHeading,
  NotesInputContainer,
  NotesInput,
  NotesTextArea,
  NotesButton,
  EmptyNotesContainer,
  EmptyImage,
  EmptyHeading,
  EmptyPara,
  NotesItemMainContainer,
} from './styledComponents'

const Notes = () => {
  const [text, setText] = useState('')
  const [note, setNote] = useState('')
  const [noteSave, setNoteSave] = useState([])
  const onText = event => {
    setText(event.target.value)
  }

  const onNote = event => {
    setNote(event.target.value)
  }

  const onAdd = () => {
    const newNote = {
      id: uuidv4(),
      text,
      note,
    }
    setNoteSave(prevState => [...prevState, newNote])
    setText('')
    setNote('')
  }

  return (
    <>
      <NotesMainContainer>
        <NotesContainer>
          <NotesHeading> Notes </NotesHeading>
          <NotesInputContainer>
            <NotesInput type="text" onChange={onText} placeholder="Title" />{' '}
            <br />
            <NotesTextArea
              rows={5}
              cols={70}
              onChange={onNote}
              placeholder="Take a Note..."
            ></NotesTextArea>{' '}
            <br />
            <NotesButton onClick={onAdd}> Add </NotesButton>
          </NotesInputContainer>
          {noteSave.length === 0 ? (
            <EmptyNotesContainer>
              <EmptyImage
                src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
                alt="notes empty"
              />
              <EmptyHeading> No Notes Yet </EmptyHeading>
              <EmptyPara> Notes you add will appear here </EmptyPara>
            </EmptyNotesContainer>
          ) : (
            <NotesItemMainContainer>
              {noteSave.map(each => (
                <NoteItem data={each} />
              ))}
            </NotesItemMainContainer>
          )}
        </NotesContainer>
      </NotesMainContainer>
    </>
  )
}

export default Notes
