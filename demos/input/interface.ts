// @ts-nocheck

interface Array<Type> {
  /**
   * Gets or sets the length of the array.
   */
  length: number;

  /**
   * Removes the last element from an array and returns it.
   */
  pop(): Type | undefined;

  /**
   * Appends new elements to an array, and returns the new length of the array.
   */
  push(...items: Type[]): number;

  // ...
}

// This is a nested interface
interface Course {
  description: {
    name: string;
    instructor: {
      name: string;
    };
    prerequisites: {
      courses: string[];
    };
  };
}

