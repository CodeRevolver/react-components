const path = require('path');
const version = require('./package.json').version;

const srcDir = path.join(__dirname, 'src');
const baseComponentDir = path.join(srcDir, 'components');

module.exports = {
    title: `CodeRevolver React Components v${version}`,
    getComponentPathLine(componentPath) {
        const name = path.basename(componentPath, '.js');
        return `import { ${name} } from '@coderevolver/react-components';`;
    },
    styleguideDir: 'docs',
    ribbon: {
        url: 'https://github.com/CodeRevolver/react-components',
        text: 'Fork me on GitHub'
    },
    sections: [
        {
            name: 'Introduction',
            content: 'doc/introduction.md'
        },
        {
            name: 'Documentation',
            sections: [
                {
                    name: 'Installation',
                    content: 'doc/installation.md',
                    description: 'The description for the installation section'
                },
                {
                    name: 'Live Demo',
                    external: true,
                    href: 'http://example.com'
                }
            ]
        },
        {
            name: 'Cards',
            content: path.join(baseComponentDir, 'cards/Cards.md'),
            components: path.join(baseComponentDir, 'cards/*.js')
        }
    ]
}