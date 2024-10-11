import { NextResponse } from 'next/server';

// Un tableau de simulation pour stocker les tâches
let tasks: { id: string; name: string }[] = [];

// GET - Récupérer toutes les tâches
export async function GET() {
    return NextResponse.json(tasks);
}

// POST - Créer une nouvelle tâche
export async function POST(request: Request) {
    const { name } = await request.json();

    // Vérifier si un nom a été fourni
    if (!name) {
        return NextResponse.json({ error: 'Task name is required' }, { status: 400 });
    }

    const newTask = { id: Math.random().toString(), name };
    tasks.push(newTask);

    return NextResponse.json(newTask);
}

// DELETE - Supprimer une tâche
export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
        return NextResponse.json({ error: 'Task ID is required' }, { status: 400 });
    }

    tasks = tasks.filter((task) => task.id !== id);

    return NextResponse.json({ message: 'Task deleted' });
}

// PUT - Mettre à jour une tâche
export async function PUT(request: Request) {
    const { id, name } = await request.json();

    if (!id || !name) {
        return NextResponse.json({ error: 'Task ID and name are required' }, { status: 400 });
    }

    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
        return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }

    tasks[taskIndex].name = name;

    return NextResponse.json(tasks[taskIndex]);
}
