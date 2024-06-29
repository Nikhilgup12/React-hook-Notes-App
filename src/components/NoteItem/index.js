import {NotesItem, NotesItemHeading, NotesItempara} from './styledComponents'
const NoteItem = props => {
  const {data} = props
  const {text, note} = data
  return (
    <>
      <NotesItem>
        <NotesItemHeading> {text} </NotesItemHeading>
        <NotesItempara> {note} </NotesItempara>
      </NotesItem>
    </>
  )
}

export default NoteItem
