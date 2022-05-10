export const getComments = async () => {
  return [
    {
      id: "1",
      body: "Comment1",
      username: "Karthi",
      userId: "1",
      parentId: null,
      createdAt: "2022-05-09T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "Comment2",
      username: "John",
      userId: "2",
      parentId: null,
      createdAt: "2022-05-09T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "Comment1 reply context",
      username: "John",
      userId: "2",
      parentId: "1",
      createdAt: "2022-05-09T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "Comment2 reply context",
      username: "Karthick",
      userId: "2",
      parentId: "2",
      createdAt: "2022-05-09T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Gafoor",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
