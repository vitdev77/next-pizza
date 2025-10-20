import * as React from 'react';

interface TestTemplateProps {
  fullName: string;
}

export function TestTemplate({ fullName }: TestTemplateProps) {
  return (
    <div>
      <h1>Новое имя: {fullName}</h1>
    </div>
  );
}
