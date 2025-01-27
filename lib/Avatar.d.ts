import PropTypes from 'prop-types';
import React, { ReactNode } from 'react';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { IMessage, LeftRightStyle, User } from './Models';
export interface AvatarProps<TMessage extends IMessage> {
    currentMessage: TMessage;
    previousMessage?: TMessage;
    nextMessage?: TMessage;
    position: 'left' | 'right';
    renderAvatarOnTop?: boolean;
    showAvatarForEveryMessage?: boolean;
    imageStyle?: LeftRightStyle<ImageStyle>;
    containerStyle?: LeftRightStyle<ViewStyle>;
    textStyle?: TextStyle;
    renderAvatar?(props: Omit<AvatarProps<TMessage>, 'renderAvatar'>): ReactNode;
    onPressAvatar?: (user: User) => void;
    onLongPressAvatar?: (user: User) => void;
}
export declare function Avatar<TMessage extends IMessage = IMessage>(props: AvatarProps<TMessage>): React.JSX.Element | null;
export declare namespace Avatar {
    var propTypes: {
        renderAvatarOnTop: PropTypes.Requireable<boolean>;
        showAvatarForEveryMessage: PropTypes.Requireable<boolean>;
        position: PropTypes.Requireable<string>;
        currentMessage: PropTypes.Requireable<object>;
        previousMessage: PropTypes.Requireable<object>;
        nextMessage: PropTypes.Requireable<object>;
        onPressAvatar: PropTypes.Requireable<(...args: any[]) => any>;
        onLongPressAvatar: PropTypes.Requireable<(...args: any[]) => any>;
        renderAvatar: PropTypes.Requireable<(...args: any[]) => any>;
        containerStyle: PropTypes.Requireable<PropTypes.InferProps<{
            left: PropTypes.Requireable<NonNullable<number | boolean | object | null | undefined>>;
            right: PropTypes.Requireable<NonNullable<number | boolean | object | null | undefined>>;
        }>>;
        imageStyle: PropTypes.Requireable<PropTypes.InferProps<{
            left: PropTypes.Requireable<NonNullable<number | boolean | object | null | undefined>>;
            right: PropTypes.Requireable<NonNullable<number | boolean | object | null | undefined>>;
        }>>;
    };
}
