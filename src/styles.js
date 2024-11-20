const styles = `
    @page {
      size: letter portrait;
      margin: 0;
    }

    @media print {
        @page {
            margin: 1in;
        }
    
        @page {
            margin: 0.4in;
        }
    }
    * {
      box-sizing: border-box;
    }

    body {
        font-size: 12px;
        font-family: Calibri, sans-serif;
    }
    
    section > h2 {
        margin-bottom: 5px;
        border-bottom: 1px solid currentcolor;
    }
    
    .basics {
        flex-direction: column;
        align-items: center;
        display: flex;
    }
    
    .basics > h1 {
        line-height: 0;
    }
    
    .basics .summary {
        padding-top: 15px;
    }

    .blocks > header {
        margin: 0;
        justify-content: space-between;
        display: flex;
    }
    
    .highlights {
        margin-top: 1px;
        padding-left: 0;
        list-style-position: inside;
    }
    .category {
        display: inline-block;
    }
    
    .projects .description {
        margin: 0;
    }
    .projects .blocks {
        margin-bottom: 10px;
    }
    
    .category::first-letter {
        text-transform: capitalize;
    }
    
    .position, .category, .name {
        font-weight: bold;
    }
    
    .gdpr {
        font-size: 8px;
        position: absolute;
        bottom: 0;
    }
`;

module.exports = styles;