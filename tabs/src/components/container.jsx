import React, {useState} from "react";

const Container = props => {
    const [state, setState] = useState({
        selectedTab: 1
    });
    const onTabSelected = (event, value) => {
        setState({
            selectedTab: value
        });
    };

    return(
        <div>
            <h1>tabs</h1>
            {[1,2,3].map((val, index) => (
                <TabButton
                    key={index}
                    onclick={e => onTabSelected(e,val)}
                    selected={state.selectedTab === val}
                >
                    Tab {val}
                </TabButton>
            ))}
            <TabContent>
                Tab {state.selectedTab} is currently selected.
            </TabContent>
        </div>
    )
}