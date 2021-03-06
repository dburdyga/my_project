<template>
    <section
            v-if="currentUser"
            class="user-profile">
        <div
                v-if="!isEditMode"
                class="card">
            <div class="card-image">
                <div class="image is-4by3 is-marginless">
                    <div
                            :style="{backgroundImage: photoURLBg}"
                            class="user-logo-bg is-overlay"/>
                    <button
                            @click="startEdit"
                            class="edit-button button">
                        ✎
                    </button>
                </div>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <div class="image is-48x48 is-marginless">
                            <div
                                    class="user-logo-bg is-overlay"
                                    :style="{backgroundImage: photoURLBg}"/>
                        </div>
                    </div>
                    <div class="media-content">
                        <p class="title is-5">{{ currentUser.displayName || currentUser.email }}</p>
                        <p
                                v-if="currentUser.displayName"
                                class="subtitle is-6">{{ currentUser.email }}</p>

                    </div>
                </div>
                <div class="content is-size-7">
                    registered:
                    <time :datetime="currentUser.metadata.creationTime">{{ currentUser.metadata.creationTime }}</time>
                </div>
            </div>
        </div>
        <form
                v-else
                class="edit-account-form">
            <div class="field">
                <label
                        class="label"
                        for="displayName">EMail</label>
                <div class="control">
                    <div class="input" disabled>{{ currentUser.email }}</div>
                </div>
            </div>
            <div class="field">
                <label
                        class="label"
                        for="displayName">Name</label>
                <div class="control">
                    <input
                            v-model="displayName"
                            id="displayName"
                            type="text"
                            class="input">
                </div>
            </div>
            <div class="field">
                <label
                        class="label"
                        for="photo">Photo</label>
                <div class="field">
                    <div class="file is-info is-small">
                        <label class="file-label">
                            <div class="image is-96x96">
                                <img :src="previewURL || photoURL" width="50" height="50">
                            </div>
                            <input
                                    @change="onFileChange($event.target.files[0])"
                                    id="photo"
                                    class="file-input"
                                    type="file"
                                    name="photo">
                            <span class="file-cta">
                <span class="file-label">
                  &#x2912;
                </span>
              </span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="buttons is-centered">
                <button
                        @click.prevent="updateUserProfile"
                        class="button is-primary">Update</button>
                <button
                        @click.prevent="cancelEdit"
                        class="button is-primary">Cancel</button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import {mapGetters} from 'vuex';
import {AuthService} from '../common/services/AuthService';
import {auth, storage} from '@/firebase';
import {UtilService} from '../common/services/UtilService';
import {CURRENT_USER} from '../store/auth/getter-types';
import {UPDATE_CURRENT_USER} from '../store/auth/mutation-types';
import {
    ACCOUNT_DISPLAY_NAME,
    ACCOUNT_PHOTO_PREVIEW_URL,
    ACCOUNT_PHOTO_URL,
    IS_ACCOUNT_EDIT_MODE,
} from '../store/account/getter-types';
import {UPDATE_ACCOUNT_DISPLAY_NAME} from '../store/account/mutation-types';
import {
    FINISH_ACCOUNT_EDIT,
    START_ACCOUNT_EDIT,
    SAVE_USER_ACCOUNT,
    HANDLE_ACCOUNT_PHOTO_FILE_CHANGE, GET_ACCOUNT_PHOTO_URL,
} from '../store/account/action-types';

export default Vue.extend({
    computed: {
        ...mapGetters({
            currentUser: CURRENT_USER,
            isEditMode: IS_ACCOUNT_EDIT_MODE,
            previewURL: ACCOUNT_PHOTO_PREVIEW_URL,
        }),
        photoURL(): string {
            return this.$store.getters[ACCOUNT_PHOTO_URL];
        },
        displayName: UtilService.mapTwoWay<string>(ACCOUNT_DISPLAY_NAME, UPDATE_ACCOUNT_DISPLAY_NAME),
        photoURLBg(): string {
            return this.photoURL ? `url('${this.photoURL}')` : '';
        },
    },
    methods: {
        startEdit() {
            this.$store.dispatch(START_ACCOUNT_EDIT);
        },
        cancelEdit() {
            this.$store.dispatch(FINISH_ACCOUNT_EDIT);
        },
        updateUserProfile() {
            this.$store.dispatch(SAVE_USER_ACCOUNT);
        },
        onFileChange(file: File) {
            this.$store.dispatch(HANDLE_ACCOUNT_PHOTO_FILE_CHANGE, file);
        },
    },
});
</script>

<style lang="scss" scoped>
    @import '../styles/mixins';
    @import '../styles/variables';

    .file.is-info:active .file-cta{
        background: $blue;
    }
    .file.is-info .file-cta{
        background: $blue;
    }
    .button.is-primary{
        &:hover{
            background: $dark-blue;
        }
    }
    .card {
        padding-top: 5px;
        padding-right: 5px;
        padding-left: 5px;
        padding-bottom: 0px;
        border-radius: 3px;
    }
    .user-profile {
        width: 400px;
        margin: 50px auto;
        transition: .2s;

        .user-profile-list {
            list-style: none;
            margin: 0;
            margin-bottom: 12px;

            .control {
                height: 36px;
                line-height: 36px;
            }
        }

        .edit-button {
            position: absolute;
            right: 6px;
            top: 6px;
            background-color: $orange;
            color: white;
            border: none;
            &:hover {
                background-color: $orange-grey;
            }
        }

        .user-logo-bg {
            background: center / cover no-repeat;
        }

        .button + .button {
            margin-left: 12px;
        }

        .file-cta{
            position: absolute;
            right: 0;
            top: 0;
        }
        .title.is-5 {
            margin-top: 14px;
        }

    }
</style>
