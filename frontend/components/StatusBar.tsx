import { Component, template } from "uix/components/Component.ts";

type StatusBarProps = {
    name: string;
    emoji: string;
    value: Ref<number>;
};


@template((props) => (
    <div class="stat-container">
        <div class="stat-header">
            <span>
                {props.emoji} {props.name}:{" "}
            </span>
            <span class="stat-value">{props.value.val}/100</span>
        </div>
        <div class="stat-bar-container">
            <div class="stat-bar" style={{ width: `${props.value.val}%` }}></div>
        </div>

        {props.value.val < 40 && <p>⚠️ Low {props.name}!</p>}
    </div>
))

export class StatusBar extends Component<StatusBarProps> {}