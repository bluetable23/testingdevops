// um den Test auszuführen, in der Kommandozeile "npx jest" / "npm test" einegeben

const request = require('supertest');
const mockingoose = require('mockingoose');
const mongoose = require('mongoose');
const app = require('../server'); // Annahme: das ist der Express-Server
const Todo = require('../models/todos'); // Das Todo-Modell

describe('Todos API', () => {

    let server;

    beforeAll(done => {
        server = app.listen(4000, done); // Starte den Server auf einem anderen Port als den ursprünglichen
    });

    afterAll(done => {
        mongoose.connection.close(); // Schließe die MongoDB-Verbindung
        server.close(done); // Schließe den Server
    });

    beforeEach(() => {
        mockingoose.resetAll();
    });

    describe('GET /todos', () => {
        it('should return all todos', async () => {
            const _todos = [
                {
                    _id: '613b1f1470c8a4aec8d1fde1',
                    aufgabe: 'Testaufgabe 1',
                    beschreibung: 'Testbeschreibung 1',
                    frist: '31.12.2024',
                    erledigt: false
                },
                {
                    _id: '613b1f1470c8a4aec8d1fde2',
                    aufgabe: 'Testaufgabe 2',
                    beschreibung: 'Testbeschreibung 2',
                    frist: '31.12.2024',
                    erledigt: true
                }
            ];
            mockingoose(Todo).toReturn(_todos, 'find');

            const res = await request(app).get('/todos');

            expect(res.status).toBe(200);
            expect(res.body).toHaveLength(2);
            expect(res.body).toEqual(expect.arrayContaining(_todos));
        });
    });

    describe('POST /todos', () => {
        it('should create a new todo', async () => {
            const _todo = {
                aufgabe: 'Neue Aufgabe',
                beschreibung: 'Neue Beschreibung',
                frist: '31.12.2024',
                erledigt: false
            };
            mockingoose(Todo).toReturn(_todo, 'save');

            const res = await request(app).post('/todos').send({
                aufgabe: 'Neue Aufgabe',
                beschreibung: 'Neue Beschreibung',
                frist: '31.12.2024',
                erledigt: false
            });

            expect(res.status).toBe(200);
            expect(res.body).toMatchObject({
                aufgabe: 'Neue Aufgabe',
                beschreibung: 'Neue Beschreibung',
                frist: '31.12.2024',
                erledigt: false
            });
        });
    });


    describe('GET /todos/:id', () => {
        it('should return a single todo by ID', async () => {
            const _todo = {
                _id: '613b1f1470c8a4aec8d1fde1',
                aufgabe: 'Testaufgabe',
                beschreibung: 'Testbeschreibung',
                frist: '31.12.2024',
                erledigt: false
            };
            mockingoose(Todo).toReturn(_todo, 'findOne');

            const res = await request(app).get('/todos/613b1f1470c8a4aec8d1fde1');
            expect(res.status).toBe(200);
            expect(res.body).toMatchObject(_todo);
        });

        it('should return 404 if todo not found', async () => {
            mockingoose(Todo).toReturn(null, 'findOne');

            const res = await request(app).get('/todos/613b1f1470c8a4aec8d1fde1');
            expect(res.status).toBe(404);
            expect(res.body).toHaveProperty('error', 'ToDo does not exist');
        });
    });
});