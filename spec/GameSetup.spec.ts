import 'mocha'
import { expect } from 'chai'

import RingOfFireService from '../services/RingOfFireService'
import PlayersNotSpecifiedException from '../exceptions/PlayersNotSpecifiedException'
import GameNotStartedException from '../exceptions/GameNotStartedException'
import InvalidPlayerNameSpecifiedException from '../exceptions/InvalidPlayerNameSpecifiedException'
import PlayersAlreadyDefinedException from '../exceptions/PlayersAlreadyDefinedException'
import NumberOfPlayersAlreadyDefinedException from '../exceptions/NumberOfPlayersAlreadyDefinedException';
import Player from '../models/Player';
import NumberOfPlayersInvalidException from '../exceptions/NumberOfPlayersInvalidException';
import NumberOfPlayersNotSpecifiedException from '../exceptions/NumberOfPlayersNotSpecifiedException';

beforeEach(() => {
    this.game = new RingOfFireService({})
})

describe('Picking cards', () => {
        
    it('should disallow picking a card when game not started', () => {
        expect(() => {
            this.game.pickNextCard()
        }).to.throw(GameNotStartedException)
    })

    it('should disallow picking a card when number of players isn\'t set', () => {
        expect(() => {
            this.game.startNewGame()
            this.game.pickNextCard()
        }).to.throw(PlayersNotSpecifiedException)
    })

    it('should disallow picking a card when names of players haven\'t been set', () => {
        expect(() => {
            this.game.startNewGame()
            this.game.specifyNumberOfPlayers(2)
            this.game.pickNextCard()
        }).to.throw(PlayersNotSpecifiedException)
    })

    it('should disallow picking a card when not all names of players have been set', () => {
        expect(() => {
            this.game.startNewGame()
            this.game.specifyNumberOfPlayers(3)
            this.game.specifyNameOfPlayer(1, 'Foo')
            this.game.pickNextCard()
        }).to.throw(PlayersNotSpecifiedException)
    })

    it('should allow picking a card when the game is set up', () => {
        this.game.startNewGame()
        this.game.specifyNumberOfPlayers(2)
        this.game.specifyNameOfPlayer(1, 'Foo')
        this.game.specifyNameOfPlayer(2, 'Bar')

        expect(this.game.checkCanPickCard()).to.be.true
    })
})

describe('Specifying number of players', () => {

    it('should disallow specifying number of players before a game is started', () => {
        expect(() => {
            this.game.specifyNumberOfPlayers(2)
        }).to.throw(GameNotStartedException)
    })

    it('should disallow specifying number of players when number of players is already set', () => {
        expect(() => {
            this.game.startNewGame()
            this.game.specifyNumberOfPlayers(2)
            this.game.specifyNumberOfPlayers(3)
        }).to.throw(NumberOfPlayersAlreadyDefinedException)
    })

    it('should disallow specifying number of players as zero', () => {
        expect(() => {
            this.game.startNewGame()
            this.game.specifyNumberOfPlayers(0)
        }).to.throw(NumberOfPlayersInvalidException)
    })

    it('should disallow specifying number of players as a negative integer', () => {
        expect(() => {
            this.game.startNewGame()
            this.game.specifyNumberOfPlayers(-2)
        }).to.throw(NumberOfPlayersInvalidException)
    })

    it('should allow numbering players when a game is started and no names have been set', () => {
        this.game.startNewGame()
        this.game.specifyNumberOfPlayers(2)
    })
})

describe('Naming players', () => {
    
    it('should disallow naming players before a game is started', () => {
        expect(() => {
            this.game.specifyNameOfPlayer(1, 'Foo')
        }).to.throw(GameNotStartedException)
    })

    it('should disallow naming players before number of players has been set', () => {
        expect(() => {
            this.game.startNewGame()
            this.game.specifyNameOfPlayer(1, 'Foo')
        }).to.throw(NumberOfPlayersNotSpecifiedException)
    })

    it('should disallow naming a player number higher than the number of players set', () => {
        expect(() => {
            this.game.startNewGame()
            this.game.specifyNumberOfPlayers(3)
            this.game.specifyNameOfPlayer(4, 'Foo')
        }).to.throw(InvalidPlayerNameSpecifiedException)
    })

    it('should disallow naming a player when all player names have been set', () => {
        expect(() => {
            this.game.startNewGame()
            this.game.specifyNumberOfPlayers(2)
            this.game.specifyNameOfPlayer(1, 'Foo')
            this.game.specifyNameOfPlayer(2, 'Bar')
            this.game.specifyNameOfPlayer(1, 'Lol')
        }).to.throw(PlayersAlreadyDefinedException)
    })

    it('should store players when specified after number of players has been set', () => {
        this.game.startNewGame()
        this.game.specifyNumberOfPlayers(3)
        this.game.specifyNameOfPlayer(1, 'Foo')
        this.game.specifyNameOfPlayer(2, 'Bar')
        this.game.specifyNameOfPlayer(3, 'Lol')

        console.log(this.game.players)

        const expectedPlayers = [
            new Player({name: 'Foo', playerNumber: 1}),
            new Player({name: 'Bar', playerNumber: 2}),
            new Player({name: 'Lol', playerNumber: 3})
        ]

        // TODO: Make more robust
        expect(this.game.players.length).to.equal(expectedPlayers.length)
    })
})