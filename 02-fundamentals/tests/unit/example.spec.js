describe('Example Component', () => {

  test('Must be greater than 10', () => {

    // Arrange
    let value = 5;

    // Act
    value = value + 2

    // Assert
    if( value > 10 ) {

    } else {
      throw `${ value } no es mayor a 10`
    }
  })

})