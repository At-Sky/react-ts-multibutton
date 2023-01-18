import * as React from 'react';
import Button from "./components/Button/Button";
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <Button metric={'a'} />
);
//ym(92073621,'reachGoal','btn')