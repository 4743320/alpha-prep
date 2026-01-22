import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import "./ReorderParagraph.css";

const initialItems = [
  {
    id: "1",
    text: "So a made-up word or compound word can be a good idea.",
  },
  {
    id: "2",
    text: "However, if your brand name reflects a key benefit of your service, such as ‘Budget Car Rental’, then you may want to consider translating it for other markets.",
  },
  {
    id: "3",
    text: "In other words, one that’s simple, easy to pronounce and has no particular meaning.",
  },
  {
    id: "4",
    text: "Ideally, the brand name you choose should be one that doesn’t require translation.",
  },
];

function SortableItem({ id, text }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="para-card">
      <div className="para-accent" />
      <p className="para-text">{text}</p>
      <span className="drag-handle" {...attributes} {...listeners}>
        ⋮⋮
      </span>
    </div>
  );
}

export default function ReorderParagraphs() {
  const [items, setItems] = useState(initialItems);

  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setItems((prev) => {
      const oldIndex = prev.findIndex((i) => i.id === active.id);
      const newIndex = prev.findIndex((i) => i.id === over.id);
      return arrayMove(prev, oldIndex, newIndex);
    });
  }

  return (
    <div className="reorder-page">
      {/* Header */}
      <div className="top-bar">
        <span className="go-back">← Go back</span>
        <span className="progress">Reading • 2 of 5 questions</span>
      </div>

      <h1 className="title">Re-order the paragraphs</h1>
      <p className="subtitle">
        The text boxes have been placed in a random order. Restore the original
        order by dragging the text boxes.
      </p>

      {/* Drag Area */}
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={items.map((i) => i.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="para-list">
            {items.map((item) => (
              <SortableItem
                key={item.id}
                id={item.id}
                text={item.text}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      <button className="next-btn">Next question</button>
    </div>
  );
}
