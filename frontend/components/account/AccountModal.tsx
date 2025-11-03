import { template, Component } from "uix/components/Component.ts";
import { changeName } from "backend/profile.ts"; 
import { ObjectRef } from "datex-core-legacy/runtime/pointers.ts";
import { type Profile } from "common/types/profile.ts"

type AccountModalProps = {
    profile: ObjectRef<Profile>;
    closeModal: () => void;
}; 

@template((props) => (
    <div class="modal-overlay" onclick={props.closeModal}>
        <div class="profile-modal" onclick={(e) => e.stopPropagation()}>
            <button type="button" class="close-button" onclick={props.closeModal}>✕</button>

            <h2>👤 {props.profile.name}'s Profile</h2>

            <button
                type="button"
                class="change-name-btn"
                onclick={async () => {
                    const name = prompt("Enter new name:");
                    if (name) await changeName(name);
                }}
            >
                ✏️ Change Name
            </button>

            <div class="profile-info">
                <div class="info-item">
                    <span class="info-label">🎂 Age:</span>
                    <span class="info-value">{props.profile.age} years old</span>
                </div>

                <div class="info-item">
                    <span class="info-label">📧 Email:</span>
                    <span class="info-value">{props.profile.email}</span>
                </div>

                <div class="info-item">
                    <span class="info-label">📱 Phone:</span>
                    <span class="info-value">{props.profile.phone}</span>
                </div>

                <div class="info-section">
                    <h3>📍 Address</h3>
                    <div class="address-details">
                        <p>{props.profile.address}</p>
                        <p>
                            {props.profile.city}, {props.profile.state} {props.profile.zip}
                        </p>
                        <p>{props.profile.country}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
))

export class AccountModal extends Component<AccountModalProps> {}