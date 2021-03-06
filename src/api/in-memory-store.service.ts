import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryStoreService implements InMemoryDbService {

  constructor() { }
  createDb(){return null}

  // createDb() {
  //   let characters = [
  //     {
  //       "id": 11,
  //       "name": "Chewbacca",
  //       "side": "light",
  //       "lines": [
  //         "He doesn't speak"
  //       ]
  //     },
  //     {
  //       "id": 12,
  //       "name": "Rey",
  //       "side": "light",
  //       "lines": [
  //         "Actually, the droid's not for sale."
  //       ]
  //     },
  //     {
  //       "id": 13,
  //       "name": "Finn (FN2187)",
  //       "side": "light",
  //       "lines": [
  //         "I'm not Resistance. I'm not a hero. I'm a stormtrooper. Like all of them, I was taken from a family I'll never know. And raised to do one thing. But my first battle, I made a choice. I wasn't gonna kill for them. So I ran. Right into you. And you looked at me like no one ever had. I was ashamed of what I was. But I'm done with the First Order. I'm never going back. - Finn to Rey"
  //       ]
  //     },
  //     {
  //       "id": 14,
  //       "name": "Han Solo",
  //       "side": "light",
  //       "lines": [
  //         "Never tell me the odds!"
  //       ]
  //     },
  //     {
  //       "id": 15,
  //       "name": "Leia Organa",
  //       "side": "light",
  //       "lines": [
  //         "We're not our enemy. We are Alderaan. We answer rage with wisdom. We answer fear with imagination. We answer war with hope. If one life with a single drop of Alderaanian blood survives, Alderaan survives. If one life with passion for Alderaanian creativity survives, Alderaan survives. And we are, each of us, important. And whatever happens, I bow to all of you, and to our future.",
  //         "You know, no matter how much we fought, I’ve always hated watching you leave."
  //       ]
  //     },
  //     {
  //       "id": 16,
  //       "name": "Luke Skywalker",
  //       "side": "light",
  //       "lines": [
  //         "None of the stories people tell about me can change who I really am."
  //       ]
  //     },
  //     {
  //       "id": 17,
  //       "name": "Poe Dameron",
  //       "side": "light",
  //       "lines": [
  //         "You are my team, you are my friends. We are Black Squadron…and it's an honor."
  //       ]
  //     },
  //     {
  //       "id": 18,
  //       "name": "Kylo Ren",
  //       "side": "dark",
  //       "lines": [
  //         "It's time to let old things die. Snoke, Skywalker. The Sith, the Jedi, the Rebels… Let it all die. Rey, I want you to join me. We can rule together and bring a new order to the galaxy."
  //       ]
  //     },
  //     {
  //       "id": 19,
  //       "name": "Supreme Commander Snoke",
  //       "side": "dark",
  //       "lines": [
  //         "There has been an awakening. Have you felt it? - Snoke, to Kylo Ren"
  //       ]
  //     },
  //     {
  //       "id": 20,
  //       "name": "R2-D2",
  //       "side": "light",
  //       "lines": [
  //         "Thank you for telling me all this. I know it can be hard to talk about, but war stories are important. I sometimes think it's my destiny—to see things, to be present, to witness the galaxy moving, evolving. It happens to me over and over again—but even so, I can't see everything. And so, I like hearing the stories. Recording them."
  //       ]
  //     },
  //     {
  //       "id": 21,
  //       "name": "BB8",
  //       "side": "light",
  //       "lines": [
  //         "Turns out you're quite a popular droid. - Rey to BB-8"
  //       ]
  //     },
  //     {
  //       "id": 22,
  //       "name": "C-3PO",
  //       "side": "light",
  //       "lines": [
  //         "I am C-3PO, human-cyborg relations."
  //       ]
  //     },
  //     {
  //       "id": 23,
  //       "name": "Maz Kanata",
  //       "side": "light",
  //       "lines": [
  //         "I am no Jedi, but I know the Force."
  //       ]
  //     },
  //     {
  //       "id": 24,
  //       "name": "Captain Phasma",
  //       "side": "dark",
  //       "lines": [
  //         "I am Phasma, and I am the greatest warrior of Parnassos."
  //       ]
  //     },
  //     {
  //       "id": 25,
  //       "name": "General Hux",
  //       "side": "dark",
  //       "lines": [
  //         "I have my orders from Supreme Leader Snoke himself. This is where we snuff out the Resistance once and for all."
  //       ]
  //     },
  //     {
  //       "id": 26,
  //       "name": "Lor San Tekka",
  //       "side": "light",
  //       "lines": [
  //         "I have traveled too far and seen too much to ignore the despair in the galaxy. Without the Jedi, there can be no balance in the Force."
  //       ]
  //     }
  //   ];

  //   let vehicles = [
  //     {
  //       id: 30,
  //       name: 'Millennium Falcon',
  //       type: 'space'
  //     },
  //     {
  //       id: 32,
  //       name: 'X-Wing Fighter',
  //       type: 'space'
  //     },
  //     {
  //       id: 33,
  //       name: 'Imperial Star Destroyer',
  //       type: 'space'
  //     },
  //     {
  //       id: 34,
  //       name: 'AT-AT Walker',
  //       type: 'land'
  //     },
  //     {
  //       id: 35,
  //       name: 'TIE Fighter',
  //       type: 'space'
  //     },
  //     {
  //       id: 36,
  //       name: 'B-Wing Fighter',
  //       type: 'space'
  //     },
  //     {
  //       id: 37,
  //       name: 'ETA-2 Jedi Starfighter',
  //       type: 'space'
  //     },
  //     {
  //       id: 38,
  //       name: 'TIE Interceptor',
  //       type: 'space'
  //     },
  //     {
  //       id: 39,
  //       name: 'X-34 Landspeeder',
  //       type: 'land'
  //     },
  //     {
  //       id: 40,
  //       name: 'Snow Speeder',
  //       type: 'land'
  //     },
  //     {
  //       id: 41,
  //       name: 'X-34 Landspeeder',
  //       type: 'land'
  //     }
  //   ];

  //   return { characters, vehicles };
  // }
}
