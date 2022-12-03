import { Badge, Row, Stack } from 'react-bootstrap';
import { useNote } from './NoteLayout';

export function Note() {
  const note = useNote();
  return (
    <>
      <Row className="mb-4">
        <h1>{note.title}</h1>
        {note.tags.length > 0 && (
          <Stack gap={1} direction="horizontal" className="flex-wrap">
            {note.tags.map((tag) => (
              <Badge className="text-truncate" key={tag.id}>
                {tag.label}
              </Badge>
            ))}
          </Stack>
        )}
      </Row>
    </>
  );
}
