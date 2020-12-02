

export type postsType = {
    likeCount: number,
    id: number,
    message: string
};

export type profileType = {
    userId: number
    fullName: string
    contacts: contactsType
    photos: photosType
};

export type contactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
};

export type photosType = {
    small: string | null
    large: string | null
};

export type userType = {
    id: number,
    name: string,
    status: string,
    photos: photosType
    followed: boolean
}