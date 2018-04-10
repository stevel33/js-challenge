const chai = require('chai');
const resort = require('../resort');
const expect = chai.expect;

describe('resort.js functionality', () => {
  it('should sort the first object u by criteria set in second object o', () => {
    const u = [
      {name: 'Gustavo', team: 'Foundation'},
      {name: 'Christina', team: 'Editorial'},
      {name: 'Sean', team: 'Autopilot'}
    ];
    
    const o = {
      sort: 'name',
      order: [
        'Christina',
        'Sean',
        'Gustavo'
      ]
    };

    const resortedResult = [ 
      { name: 'Christina', team: 'Editorial' },
      { name: 'Sean', team: 'Autopilot' },
      { name: 'Gustavo', team: 'Foundation' } 
    ]

    expect(resort(u, o)).to.eql(resortedResult);
  });

  it('should sort the first object u by criteria set in second object o when u has duplicates', () => {
    const u = [
      {name: 'Gustavo', team: 'Foundation'},
      {name: 'Christina', team: 'Editorial'},
      {name: 'Sean', team: 'Autopilot'},
      {name: 'Christina', team: 'Editorial'},
    ];
    
    const o = {
      sort: 'name',
      order: [
        'Christina',
        'Sean',
        'Gustavo'
      ]
    };

    const resortedResult = [ 
      { name: 'Christina', team: 'Editorial' },
      { name: 'Christina', team: 'Editorial' },
      { name: 'Sean', team: 'Autopilot' },
      { name: 'Gustavo', team: 'Foundation' } 
    ]

    expect(resort(u, o)).to.eql(resortedResult);
  });
});