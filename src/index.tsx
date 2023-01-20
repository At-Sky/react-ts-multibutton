import React from 'react';
import { createRoot } from 'react-dom/client';
import Button from "./components/Button/Button";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <Button metricaId={92073621} />
);