import React from 'react';
import ReactMarkdown from 'react-markdown';

export interface MarkDownProps {
    mdFile?: string;
    mdText?: string;
}

export interface MarkDownLocalState {
    mdContent: string;
}

class RenderMarkDown extends React.Component<MarkDownProps, MarkDownLocalState> {
    constructor(props:any) {
        super(props)
        this.state = { mdContent: '' }
    }

    async componentDidMount() {
        if(this.props.mdFile){
            const fileName = this.props.mdFile;
            const file = await import(`../Content/${fileName}.md`);
            const response = await fetch(file.default);
            const text = await response.text();
    
            this.setState({
                mdContent: text
            })
            return;
        }
        
        this.setState({
            mdContent: this.props.mdText ?? ''
        })
    }

    render() {
        return (
            <ReactMarkdown children={this.state.mdContent} />
        )
    }
}

export default RenderMarkDown;