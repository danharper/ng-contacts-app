describe('ContactModel', function() {
  var sut;
  beforeEach(function() {
    sut = require('./contact-model.js')
  })

  it('should initialise with an object', function() {
    var x = new sut({ id: 9, firstName: 'Bar', lastName: 'Baz', city: 'Epic' })
    expect(x.id).toBe(9)
    expect(x.firstName).toBe('Bar')
    expect(x.lastName).toBe('Baz')
    expect(x.city).toBe('Epic')
  })

  it('should mark fields not provided as undefined', function() {
    var x = new sut({ lastName: 'Jones' })
    expect(x.id).toBe(undefined)
    expect(x.firstName).toBe(undefined)
  })

  it('should include a dynamic "name" property', function() {
    var x = new sut({ firstName: 'Dan', lastName: 'Harper' })
    expect(x.name).toBe('Dan Harper')
  })
})