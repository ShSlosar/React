import React, {useState} from "react";
import TabButton from "./tabComp";
import TabContent from "./contentComp";

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
        <div className="mx-auto">
            <h1>tabs</h1>
            {[1,2,3].map((val, index) => (
                <TabButton
                    key={index}
                    onClick={e => onTabSelected(e,val)}
                    selected={state.selectedTab === val}
                >
                    Tab {val}
                </TabButton>
            ))}
            <TabContent className="mx-auto">
                Tab {state.selectedTab} is currently selected.
            </TabContent>
        </div>
    );
}

export default Container;