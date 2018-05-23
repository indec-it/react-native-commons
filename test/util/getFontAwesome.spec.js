import getFontAwesome from '../../src/util/getFontAwesome';

describe('getFontAwesome', () => {
    it('should get a font-awesome type icon', () =>
        getFontAwesome()
            .type
            .should
            .be
            .equal('font-awesome')
    );

    it('should be a font-awesome icon with the given name', () => {
        const icon = getFontAwesome('user');
        icon.type.should.be.equal('font-awesome');
        icon.name.should.be.equal('user');
    });

    it('should be a font-awesome icon with a defined color', () => {
        const icon = getFontAwesome('superpowers', 'red');
        icon.type.should.be.equal('font-awesome');
        icon.name.should.be.equal('superpowers');
        icon.color.should.be.equal('red');
    });
});
