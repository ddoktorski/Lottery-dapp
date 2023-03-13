const lottery = artifacts.require('Lottery');

contract('Lottery', (accounts) => {

  let instance;
  beforeEach('Should set up the contract instance', async () => {
    instance = await lottery.deployed();
  });

  it('Enter lottery', async () => {
    await instance.addBet({from: accounts[1], value: web3.utils.toWei('10', 'gwei')});
    const participants = await instance.getParticipants();
    assert.equal(participants.length, 1);
    assert.equal(participants[0], accounts[1]);
  });

  it('Initinal state of random number', async () => {
    const randomNumber = await instance.getRandomNumber();
    const {0: value, 1: inProgress, 2: alreadyUsed} = randomNumber;
    assert.equal(value, 0);
    assert.isFalse(inProgress);
    assert.isTrue(alreadyUsed);
  });
  
  it('Cannot add less than 1 gwei', async () => {
    try {
      await instance.addBet({from: accounts[1]});
      throw new Error();
    } catch {
      return true;
    }
  })
});
