/**
 * This file was generated by the Jikan Bot API generator.
 * Do not modify this file manually.
 * Use methods of 'client.core.ts' to setup client.
 **/

import * as types from './types';
import { client_fetch } from './core';

/**
 * Returns complete anime resource data
 */
export const getAnimeFullById = async (
    args: types.GetAnimeFullByIdData,
): Promise<types.GetAnimeFullByIdResponse> => {
    return await client_fetch<
        types.GetAnimeFullByIdData,
        types.GetAnimeFullByIdResponse
    >(`anime/${args.id}/full`, args);
};

/**
 * Returns anime resource
 */
export const getAnimeById = async (
    args: types.GetAnimeByIdData,
): Promise<types.GetAnimeByIdResponse> => {
    return await client_fetch<
        types.GetAnimeByIdData,
        types.GetAnimeByIdResponse
    >(`anime/${args.id}`, args);
};

/**
 * Returns anime characters resource
 */
export const getAnimeCharacters = async (
    args: types.GetAnimeCharactersData,
): Promise<types.GetAnimeCharactersResponse> => {
    return await client_fetch<
        types.GetAnimeCharactersData,
        types.GetAnimeCharactersResponse
    >(`anime/${args.id}/characters`, args);
};

/**
 * Returns anime staff resource
 */
export const getAnimeStaff = async (
    args: types.GetAnimeStaffData,
): Promise<types.GetAnimeStaffResponse> => {
    return await client_fetch<
        types.GetAnimeStaffData,
        types.GetAnimeStaffResponse
    >(`anime/${args.id}/staff`, args);
};

/**
 * Returns a list of anime episodes
 */
export const getAnimeEpisodes = async (
    args: types.GetAnimeEpisodesData,
): Promise<types.GetAnimeEpisodesResponse> => {
    return await client_fetch<
        types.GetAnimeEpisodesData,
        types.GetAnimeEpisodesResponse
    >(`anime/${args.id}/episodes`, args);
};

/**
 * Returns a single anime episode resource
 */
export const getAnimeEpisodeById = async (
    args: types.GetAnimeEpisodeByIdData,
): Promise<types.GetAnimeEpisodeByIdResponse> => {
    return await client_fetch<
        types.GetAnimeEpisodeByIdData,
        types.GetAnimeEpisodeByIdResponse
    >(`anime/${args.id}/episodes/${args.episode}`, args);
};

/**
 * Returns a list of news articles related to the entry
 */
export const getAnimeNews = async (
    args: types.GetAnimeNewsData,
): Promise<types.GetAnimeNewsResponse> => {
    return await client_fetch<
        types.GetAnimeNewsData,
        types.GetAnimeNewsResponse
    >(`anime/${args.id}/news`, args);
};

/**
 * Returns a list of forum topics related to the entry
 */
export const getAnimeForum = async (
    args: types.GetAnimeForumData,
): Promise<types.GetAnimeForumResponse> => {
    return await client_fetch<
        types.GetAnimeForumData,
        types.GetAnimeForumResponse
    >(`anime/${args.id}/forum`, args);
};

/**
 * Returns videos related to the entry
 */
export const getAnimeVideos = async (
    args: types.GetAnimeVideosData,
): Promise<types.GetAnimeVideosResponse> => {
    return await client_fetch<
        types.GetAnimeVideosData,
        types.GetAnimeVideosResponse
    >(`anime/${args.id}/videos`, args);
};

/**
 * Returns episode videos related to the entry
 */
export const getAnimeVideosEpisodes = async (
    args: types.GetAnimeVideosEpisodesData,
): Promise<types.GetAnimeVideosEpisodesResponse> => {
    return await client_fetch<
        types.GetAnimeVideosEpisodesData,
        types.GetAnimeVideosEpisodesResponse
    >(`anime/${args.id}/videos/episodes`, args);
};

/**
 * Returns pictures related to the entry
 */
export const getAnimePictures = async (
    args: types.GetAnimePicturesData,
): Promise<types.GetAnimePicturesResponse> => {
    return await client_fetch<
        types.GetAnimePicturesData,
        types.GetAnimePicturesResponse
    >(`anime/${args.id}/pictures`, args);
};

/**
 * Returns anime statistics
 */
export const getAnimeStatistics = async (
    args: types.GetAnimeStatisticsData,
): Promise<types.GetAnimeStatisticsResponse> => {
    return await client_fetch<
        types.GetAnimeStatisticsData,
        types.GetAnimeStatisticsResponse
    >(`anime/${args.id}/statistics`, args);
};

/**
 * Returns anime statistics
 */
export const getAnimeMoreInfo = async (
    args: types.GetAnimeMoreInfoData,
): Promise<types.GetAnimeMoreInfoResponse> => {
    return await client_fetch<
        types.GetAnimeMoreInfoData,
        types.GetAnimeMoreInfoResponse
    >(`anime/${args.id}/moreinfo`, args);
};

/**
 * Returns anime recommendations
 */
export const getAnimeRecommendations = async (
    args: types.GetAnimeRecommendationsData,
): Promise<types.GetAnimeRecommendationsResponse> => {
    return await client_fetch<
        types.GetAnimeRecommendationsData,
        types.GetAnimeRecommendationsResponse
    >(`anime/${args.id}/recommendations`, args);
};

/**
 * Returns a list of users who have added/updated/removed the entry on their list
 */
export const getAnimeUserUpdates = async (
    args: types.GetAnimeUserUpdatesData,
): Promise<types.GetAnimeUserUpdatesResponse> => {
    return await client_fetch<
        types.GetAnimeUserUpdatesData,
        types.GetAnimeUserUpdatesResponse
    >(`anime/${args.id}/userupdates`, args);
};

/**
 * Returns anime reviews
 */
export const getAnimeReviews = async (
    args: types.GetAnimeReviewsData,
): Promise<types.GetAnimeReviewsResponse> => {
    return await client_fetch<
        types.GetAnimeReviewsData,
        types.GetAnimeReviewsResponse
    >(`anime/${args.id}/reviews`, args);
};

/**
 * Returns anime relations
 */
export const getAnimeRelations = async (
    args: types.GetAnimeRelationsData,
): Promise<types.GetAnimeRelationsResponse> => {
    return await client_fetch<
        types.GetAnimeRelationsData,
        types.GetAnimeRelationsResponse
    >(`anime/${args.id}/relations`, args);
};

/**
 * Returns anime themes
 */
export const getAnimeThemes = async (
    args: types.GetAnimeThemesData,
): Promise<types.GetAnimeThemesResponse> => {
    return await client_fetch<
        types.GetAnimeThemesData,
        types.GetAnimeThemesResponse
    >(`anime/${args.id}/themes`, args);
};

/**
 * Returns anime external links
 */
export const getAnimeExternal = async (
    args: types.GetAnimeExternalData,
): Promise<types.GetAnimeExternalResponse> => {
    return await client_fetch<
        types.GetAnimeExternalData,
        types.GetAnimeExternalResponse
    >(`anime/${args.id}/external`, args);
};

/**
 * Returns anime streaming links
 */
export const getAnimeStreaming = async (
    args: types.GetAnimeStreamingData,
): Promise<types.GetAnimeStreamingResponse> => {
    return await client_fetch<
        types.GetAnimeStreamingData,
        types.GetAnimeStreamingResponse
    >(`anime/${args.id}/streaming`, args);
};

/**
 * Returns complete character resource data
 */
export const getCharacterFullById = async (
    args: types.GetCharacterFullByIdData,
): Promise<types.GetCharacterFullByIdResponse> => {
    return await client_fetch<
        types.GetCharacterFullByIdData,
        types.GetCharacterFullByIdResponse
    >(`characters/${args.id}/full`, args);
};

/**
 * Returns character resource
 */
export const getCharacterById = async (
    args: types.GetCharacterByIdData,
): Promise<types.GetCharacterByIdResponse> => {
    return await client_fetch<
        types.GetCharacterByIdData,
        types.GetCharacterByIdResponse
    >(`characters/${args.id}`, args);
};

/**
 * Returns anime that character is in
 */
export const getCharacterAnime = async (
    args: types.GetCharacterAnimeData,
): Promise<types.GetCharacterAnimeResponse> => {
    return await client_fetch<
        types.GetCharacterAnimeData,
        types.GetCharacterAnimeResponse
    >(`characters/${args.id}/anime`, args);
};

/**
 * Returns manga that character is in
 */
export const getCharacterManga = async (
    args: types.GetCharacterMangaData,
): Promise<types.GetCharacterMangaResponse> => {
    return await client_fetch<
        types.GetCharacterMangaData,
        types.GetCharacterMangaResponse
    >(`characters/${args.id}/manga`, args);
};

/**
 * Returns the character's voice actors
 */
export const getCharacterVoiceActors = async (
    args: types.GetCharacterVoiceActorsData,
): Promise<types.GetCharacterVoiceActorsResponse> => {
    return await client_fetch<
        types.GetCharacterVoiceActorsData,
        types.GetCharacterVoiceActorsResponse
    >(`characters/${args.id}/voices`, args);
};

/**
 * Returns pictures related to the entry
 */
export const getCharacterPictures = async (
    args: types.GetCharacterPicturesData,
): Promise<types.GetCharacterPicturesResponse> => {
    return await client_fetch<
        types.GetCharacterPicturesData,
        types.GetCharacterPicturesResponse
    >(`characters/${args.id}/pictures`, args);
};

/**
 * Returns Club Resource
 */
export const getClubsById = async (
    args: types.GetClubsByIdData,
): Promise<types.GetClubsByIdResponse> => {
    return await client_fetch<
        types.GetClubsByIdData,
        types.GetClubsByIdResponse
    >(`clubs/${args.id}`, args);
};

/**
 * Returns Club Members Resource
 */
export const getClubMembers = async (
    args: types.GetClubMembersData,
): Promise<types.GetClubMembersResponse> => {
    return await client_fetch<
        types.GetClubMembersData,
        types.GetClubMembersResponse
    >(`clubs/${args.id}/members`, args);
};

/**
 * Returns Club Staff
 */
export const getClubStaff = async (
    args: types.GetClubStaffData,
): Promise<types.GetClubStaffResponse> => {
    return await client_fetch<
        types.GetClubStaffData,
        types.GetClubStaffResponse
    >(`clubs/${args.id}/staff`, args);
};

/**
 * Returns Club Relations
 */
export const getClubRelations = async (
    args: types.GetClubRelationsData,
): Promise<types.GetClubRelationsResponse> => {
    return await client_fetch<
        types.GetClubRelationsData,
        types.GetClubRelationsResponse
    >(`clubs/${args.id}/relations`, args);
};

/**
 * Returns entry genres, explicit_genres, themes and demographics
 */
export const getAnimeGenres = async (
    args: types.GetAnimeGenresData,
): Promise<types.GetAnimeGenresResponse> => {
    return await client_fetch<
        types.GetAnimeGenresData,
        types.GetAnimeGenresResponse
    >(`genres/anime`, args);
};

/**
 * Returns entry genres, explicit_genres, themes and demographics
 */
export const getMangaGenres = async (
    args: types.GetMangaGenresData,
): Promise<types.GetMangaGenresResponse> => {
    return await client_fetch<
        types.GetMangaGenresData,
        types.GetMangaGenresResponse
    >(`genres/manga`, args);
};

/**
 * Returns magazines collection
 */
export const getMagazines = async (
    args: types.GetMagazinesData,
): Promise<types.GetMagazinesResponse> => {
    return await client_fetch<
        types.GetMagazinesData,
        types.GetMagazinesResponse
    >(`magazines`, args);
};

/**
 * Returns complete manga resource data
 */
export const getMangaFullById = async (
    args: types.GetMangaFullByIdData,
): Promise<types.GetMangaFullByIdResponse> => {
    return await client_fetch<
        types.GetMangaFullByIdData,
        types.GetMangaFullByIdResponse
    >(`manga/${args.id}/full`, args);
};

/**
 * Returns pictures related to the entry
 */
export const getMangaById = async (
    args: types.GetMangaByIdData,
): Promise<types.GetMangaByIdResponse> => {
    return await client_fetch<
        types.GetMangaByIdData,
        types.GetMangaByIdResponse
    >(`manga/${args.id}`, args);
};

/**
 * Returns manga characters resource
 */
export const getMangaCharacters = async (
    args: types.GetMangaCharactersData,
): Promise<types.GetMangaCharactersResponse> => {
    return await client_fetch<
        types.GetMangaCharactersData,
        types.GetMangaCharactersResponse
    >(`manga/${args.id}/characters`, args);
};

/**
 * Returns a list of manga news topics
 */
export const getMangaNews = async (
    args: types.GetMangaNewsData,
): Promise<types.GetMangaNewsResponse> => {
    return await client_fetch<
        types.GetMangaNewsData,
        types.GetMangaNewsResponse
    >(`manga/${args.id}/news`, args);
};

/**
 * Returns a list of manga forum topics
 */
export const getMangaTopics = async (
    args: types.GetMangaTopicsData,
): Promise<types.GetMangaTopicsResponse> => {
    return await client_fetch<
        types.GetMangaTopicsData,
        types.GetMangaTopicsResponse
    >(`manga/${args.id}/forum`, args);
};

/**
 * Returns a list of manga pictures
 */
export const getMangaPictures = async (
    args: types.GetMangaPicturesData,
): Promise<types.GetMangaPicturesResponse> => {
    return await client_fetch<
        types.GetMangaPicturesData,
        types.GetMangaPicturesResponse
    >(`manga/${args.id}/pictures`, args);
};

/**
 * Returns anime statistics
 */
export const getMangaStatistics = async (
    args: types.GetMangaStatisticsData,
): Promise<types.GetMangaStatisticsResponse> => {
    return await client_fetch<
        types.GetMangaStatisticsData,
        types.GetMangaStatisticsResponse
    >(`manga/${args.id}/statistics`, args);
};

/**
 * Returns manga moreinfo
 */
export const getMangaMoreInfo = async (
    args: types.GetMangaMoreInfoData,
): Promise<types.GetMangaMoreInfoResponse> => {
    return await client_fetch<
        types.GetMangaMoreInfoData,
        types.GetMangaMoreInfoResponse
    >(`manga/${args.id}/moreinfo`, args);
};

/**
 * Returns manga recommendations
 */
export const getMangaRecommendations = async (
    args: types.GetMangaRecommendationsData,
): Promise<types.GetMangaRecommendationsResponse> => {
    return await client_fetch<
        types.GetMangaRecommendationsData,
        types.GetMangaRecommendationsResponse
    >(`manga/${args.id}/recommendations`, args);
};

/**
 * Returns manga user updates
 */
export const getMangaUserUpdates = async (
    args: types.GetMangaUserUpdatesData,
): Promise<types.GetMangaUserUpdatesResponse> => {
    return await client_fetch<
        types.GetMangaUserUpdatesData,
        types.GetMangaUserUpdatesResponse
    >(`manga/${args.id}/userupdates`, args);
};

/**
 * Returns manga reviews
 */
export const getMangaReviews = async (
    args: types.GetMangaReviewsData,
): Promise<types.GetMangaReviewsResponse> => {
    return await client_fetch<
        types.GetMangaReviewsData,
        types.GetMangaReviewsResponse
    >(`manga/${args.id}/reviews`, args);
};

/**
 * Returns manga relations
 */
export const getMangaRelations = async (
    args: types.GetMangaRelationsData,
): Promise<types.GetMangaRelationsResponse> => {
    return await client_fetch<
        types.GetMangaRelationsData,
        types.GetMangaRelationsResponse
    >(`manga/${args.id}/relations`, args);
};

/**
 * Returns manga external links
 */
export const getMangaExternal = async (
    args: types.GetMangaExternalData,
): Promise<types.GetMangaExternalResponse> => {
    return await client_fetch<
        types.GetMangaExternalData,
        types.GetMangaExternalResponse
    >(`manga/${args.id}/external`, args);
};

/**
 * Returns complete character resource data
 */
export const getPersonFullById = async (
    args: types.GetPersonFullByIdData,
): Promise<types.GetPersonFullByIdResponse> => {
    return await client_fetch<
        types.GetPersonFullByIdData,
        types.GetPersonFullByIdResponse
    >(`people/${args.id}/full`, args);
};

/**
 * Returns pictures related to the entry
 */
export const getPersonById = async (
    args: types.GetPersonByIdData,
): Promise<types.GetPersonByIdResponse> => {
    return await client_fetch<
        types.GetPersonByIdData,
        types.GetPersonByIdResponse
    >(`people/${args.id}`, args);
};

/**
 * Returns person's anime staff positions
 */
export const getPersonAnime = async (
    args: types.GetPersonAnimeData,
): Promise<types.GetPersonAnimeResponse> => {
    return await client_fetch<
        types.GetPersonAnimeData,
        types.GetPersonAnimeResponse
    >(`people/${args.id}/anime`, args);
};

/**
 * Returns person's voice acting roles
 */
export const getPersonVoices = async (
    args: types.GetPersonVoicesData,
): Promise<types.GetPersonVoicesResponse> => {
    return await client_fetch<
        types.GetPersonVoicesData,
        types.GetPersonVoicesResponse
    >(`people/${args.id}/voices`, args);
};

/**
 * Returns person's published manga works
 */
export const getPersonManga = async (
    args: types.GetPersonMangaData,
): Promise<types.GetPersonMangaResponse> => {
    return await client_fetch<
        types.GetPersonMangaData,
        types.GetPersonMangaResponse
    >(`people/${args.id}/manga`, args);
};

/**
 * Returns a list of pictures of the person
 */
export const getPersonPictures = async (
    args: types.GetPersonPicturesData,
): Promise<types.GetPersonPicturesResponse> => {
    return await client_fetch<
        types.GetPersonPicturesData,
        types.GetPersonPicturesResponse
    >(`people/${args.id}/pictures`, args);
};

/**
 * Returns producer resource
 */
export const getProducerById = async (
    args: types.GetProducerByIdData,
): Promise<types.GetProducerByIdResponse> => {
    return await client_fetch<
        types.GetProducerByIdData,
        types.GetProducerByIdResponse
    >(`producers/${args.id}`, args);
};

/**
 * Returns producer resource
 */
export const getProducerFullById = async (
    args: types.GetProducerFullByIdData,
): Promise<types.GetProducerFullByIdResponse> => {
    return await client_fetch<
        types.GetProducerFullByIdData,
        types.GetProducerFullByIdResponse
    >(`producers/${args.id}/full`, args);
};

/**
 * Returns producer's external links
 */
export const getProducerExternal = async (
    args: types.GetProducerExternalData,
): Promise<types.GetProducerExternalResponse> => {
    return await client_fetch<
        types.GetProducerExternalData,
        types.GetProducerExternalResponse
    >(`producers/${args.id}/external`, args);
};

/**
 * Returns a random anime resource
 */
export const getRandomAnime =
    async (): Promise<types.GetRandomAnimeResponse> => {
        return await client_fetch<never, types.GetRandomAnimeResponse>(
            'random/anime',
        );
    };

/**
 * Returns a random manga resource
 */
export const getRandomManga =
    async (): Promise<types.GetRandomMangaResponse> => {
        return await client_fetch<never, types.GetRandomMangaResponse>(
            'random/manga',
        );
    };

/**
 * Returns a random character resource
 */
export const getRandomCharacters =
    async (): Promise<types.GetRandomCharactersResponse> => {
        return await client_fetch<never, types.GetRandomCharactersResponse>(
            'random/characters',
        );
    };

/**
 * Returns a random person resource
 */
export const getRandomPeople =
    async (): Promise<types.GetRandomPeopleResponse> => {
        return await client_fetch<never, types.GetRandomPeopleResponse>(
            'random/people',
        );
    };

/**
 * Returns a random user profile resource
 */
export const getRandomUsers =
    async (): Promise<types.GetRandomUsersResponse> => {
        return await client_fetch<never, types.GetRandomUsersResponse>(
            'random/users',
        );
    };

/**
 * Returns recent anime recommendations
 */
export const getRecentAnimeRecommendations = async (
    args: types.GetRecentAnimeRecommendationsData,
): Promise<types.GetRecentAnimeRecommendationsResponse> => {
    return await client_fetch<
        types.GetRecentAnimeRecommendationsData,
        types.GetRecentAnimeRecommendationsResponse
    >(`recommendations/anime`, args);
};

/**
 * Returns recent manga recommendations
 */
export const getRecentMangaRecommendations = async (
    args: types.GetRecentMangaRecommendationsData,
): Promise<types.GetRecentMangaRecommendationsResponse> => {
    return await client_fetch<
        types.GetRecentMangaRecommendationsData,
        types.GetRecentMangaRecommendationsResponse
    >(`recommendations/manga`, args);
};

/**
 * Returns recent anime reviews
 */
export const getRecentAnimeReviews = async (
    args: types.GetRecentAnimeReviewsData,
): Promise<types.GetRecentAnimeReviewsResponse> => {
    return await client_fetch<
        types.GetRecentAnimeReviewsData,
        types.GetRecentAnimeReviewsResponse
    >(`reviews/anime`, args);
};

/**
 * Returns recent manga reviews
 */
export const getRecentMangaReviews = async (
    args: types.GetRecentMangaReviewsData,
): Promise<types.GetRecentMangaReviewsResponse> => {
    return await client_fetch<
        types.GetRecentMangaReviewsData,
        types.GetRecentMangaReviewsResponse
    >(`reviews/manga`, args);
};

/**
 * Returns weekly schedule
 */
export const getSchedules = async (
    args: types.GetSchedulesData,
): Promise<types.GetSchedulesResponse> => {
    return await client_fetch<
        types.GetSchedulesData,
        types.GetSchedulesResponse
    >(`schedules`, args);
};

/**
 * Returns search results for anime
 */
export const getAnimeSearch = async (
    args: types.GetAnimeSearchData,
): Promise<types.GetAnimeSearchResponse> => {
    return await client_fetch<
        types.GetAnimeSearchData,
        types.GetAnimeSearchResponse
    >(`anime`, args);
};

/**
 * Returns search results for manga
 */
export const getMangaSearch = async (
    args: types.GetMangaSearchData,
): Promise<types.GetMangaSearchResponse> => {
    return await client_fetch<
        types.GetMangaSearchData,
        types.GetMangaSearchResponse
    >(`manga`, args);
};

/**
 * Returns search results for people
 */
export const getPeopleSearch = async (
    args: types.GetPeopleSearchData,
): Promise<types.GetPeopleSearchResponse> => {
    return await client_fetch<
        types.GetPeopleSearchData,
        types.GetPeopleSearchResponse
    >(`people`, args);
};

/**
 * Returns search results for characters
 */
export const getCharactersSearch = async (
    args: types.GetCharactersSearchData,
): Promise<types.GetCharactersSearchResponse> => {
    return await client_fetch<
        types.GetCharactersSearchData,
        types.GetCharactersSearchResponse
    >(`characters`, args);
};

/**
 * Returns search results for users
 */
export const getUsersSearch = async (
    args: types.GetUsersSearchData,
): Promise<types.GetUsersSearchResponse> => {
    return await client_fetch<
        types.GetUsersSearchData,
        types.GetUsersSearchResponse
    >(`users`, args);
};

/**
 * Returns username by ID search
 */
export const getUserById = async (
    args: types.GetUserByIdData,
): Promise<types.GetUserByIdResponse> => {
    return await client_fetch<types.GetUserByIdData, types.GetUserByIdResponse>(
        `users/userbyid/${args.id}`,
        args,
    );
};

/**
 * Returns search results for clubs
 */
export const getClubsSearch = async (
    args: types.GetClubsSearchData,
): Promise<types.GetClubsSearchResponse> => {
    return await client_fetch<
        types.GetClubsSearchData,
        types.GetClubsSearchResponse
    >(`clubs`, args);
};

/**
 * Returns producers collection
 */
export const getProducers = async (
    args: types.GetProducersData,
): Promise<types.GetProducersResponse> => {
    return await client_fetch<
        types.GetProducersData,
        types.GetProducersResponse
    >(`producers`, args);
};

/**
 * Returns current seasonal anime
 */
export const getSeasonNow = async (
    args: types.GetSeasonNowData,
): Promise<types.GetSeasonNowResponse> => {
    return await client_fetch<
        types.GetSeasonNowData,
        types.GetSeasonNowResponse
    >(`seasons/now`, args);
};

/**
 * Returns seasonal anime
 */
export const getSeason = async (
    args: types.GetSeasonData,
): Promise<types.GetSeasonResponse> => {
    return await client_fetch<types.GetSeasonData, types.GetSeasonResponse>(
        `seasons/${args.year}/${args.season}`,
        args,
    );
};

/**
 * Returns available list of seasons
 */
export const getSeasonsList =
    async (): Promise<types.GetSeasonsListResponse> => {
        return await client_fetch<never, types.GetSeasonsListResponse>(
            'seasons',
        );
    };

/**
 * Returns upcoming season's anime
 */
export const getSeasonUpcoming = async (
    args: types.GetSeasonUpcomingData,
): Promise<types.GetSeasonUpcomingResponse> => {
    return await client_fetch<
        types.GetSeasonUpcomingData,
        types.GetSeasonUpcomingResponse
    >(`seasons/upcoming`, args);
};

/**
 * Returns top anime
 */
export const getTopAnime = async (
    args: types.GetTopAnimeData,
): Promise<types.GetTopAnimeResponse> => {
    return await client_fetch<types.GetTopAnimeData, types.GetTopAnimeResponse>(
        `top/anime`,
        args,
    );
};

/**
 * Returns top manga
 */
export const getTopManga = async (
    args: types.GetTopMangaData,
): Promise<types.GetTopMangaResponse> => {
    return await client_fetch<types.GetTopMangaData, types.GetTopMangaResponse>(
        `top/manga`,
        args,
    );
};

/**
 * Returns top people
 */
export const getTopPeople = async (
    args: types.GetTopPeopleData,
): Promise<types.GetTopPeopleResponse> => {
    return await client_fetch<
        types.GetTopPeopleData,
        types.GetTopPeopleResponse
    >(`top/people`, args);
};

/**
 * Returns top characters
 */
export const getTopCharacters = async (
    args: types.GetTopCharactersData,
): Promise<types.GetTopCharactersResponse> => {
    return await client_fetch<
        types.GetTopCharactersData,
        types.GetTopCharactersResponse
    >(`top/characters`, args);
};

/**
 * Returns top reviews
 */
export const getTopReviews = async (
    args: types.GetTopReviewsData,
): Promise<types.GetTopReviewsResponse> => {
    return await client_fetch<
        types.GetTopReviewsData,
        types.GetTopReviewsResponse
    >(`top/reviews`, args);
};

/**
 * Returns complete user resource data
 */
export const getUserFullProfile = async (
    args: types.GetUserFullProfileData,
): Promise<types.GetUserFullProfileResponse> => {
    return await client_fetch<
        types.GetUserFullProfileData,
        types.GetUserFullProfileResponse
    >(`users/${args.username}/full`, args);
};

/**
 * Returns user profile
 */
export const getUserProfile = async (
    args: types.GetUserProfileData,
): Promise<types.GetUserProfileResponse> => {
    return await client_fetch<
        types.GetUserProfileData,
        types.GetUserProfileResponse
    >(`users/${args.username}`, args);
};

/**
 * Returns user statistics
 */
export const getUserStatistics = async (
    args: types.GetUserStatisticsData,
): Promise<types.GetUserStatisticsResponse> => {
    return await client_fetch<
        types.GetUserStatisticsData,
        types.GetUserStatisticsResponse
    >(`users/${args.username}/statistics`, args);
};

/**
 * Returns user favorites
 */
export const getUserFavorites = async (
    args: types.GetUserFavoritesData,
): Promise<types.GetUserFavoritesResponse> => {
    return await client_fetch<
        types.GetUserFavoritesData,
        types.GetUserFavoritesResponse
    >(`users/${args.username}/favorites`, args);
};

/**
 * Returns user updates
 */
export const getUserUpdates = async (
    args: types.GetUserUpdatesData,
): Promise<types.GetUserUpdatesResponse> => {
    return await client_fetch<
        types.GetUserUpdatesData,
        types.GetUserUpdatesResponse
    >(`users/${args.username}/userupdates`, args);
};

/**
 * Returns user about in raw HTML
 */
export const getUserAbout = async (
    args: types.GetUserAboutData,
): Promise<types.GetUserAboutResponse> => {
    return await client_fetch<
        types.GetUserAboutData,
        types.GetUserAboutResponse
    >(`users/${args.username}/about`, args);
};

/**
 * Returns user history (past 30 days)
 */
export const getUserHistory = async (
    args: types.GetUserHistoryData,
): Promise<types.GetUserHistoryResponse> => {
    return await client_fetch<
        types.GetUserHistoryData,
        types.GetUserHistoryResponse
    >(`users/${args.username}/history`, args);
};

/**
 * Returns user friends
 */
export const getUserFriends = async (
    args: types.GetUserFriendsData,
): Promise<types.GetUserFriendsResponse> => {
    return await client_fetch<
        types.GetUserFriendsData,
        types.GetUserFriendsResponse
    >(`users/${args.username}/friends`, args);
};

/**
 * Returns user anime list
 */
export const getUserAnimelist = async (
    args: types.GetUserAnimelistData,
): Promise<types.GetUserAnimelistResponse> => {
    return await client_fetch<
        types.GetUserAnimelistData,
        types.GetUserAnimelistResponse
    >(`users/${args.username}/animelist`, args);
};

/**
 * Returns user manga list
 */
export const getUserMangaList = async (
    args: types.GetUserMangaListData,
): Promise<types.GetUserMangaListResponse> => {
    return await client_fetch<
        types.GetUserMangaListData,
        types.GetUserMangaListResponse
    >(`users/${args.username}/mangalist`, args);
};

/**
 * Returns user reviews
 */
export const getUserReviews = async (
    args: types.GetUserReviewsData,
): Promise<types.GetUserReviewsResponse> => {
    return await client_fetch<
        types.GetUserReviewsData,
        types.GetUserReviewsResponse
    >(`users/${args.username}/reviews`, args);
};

/**
 * Returns Recent Anime Recommendations
 */
export const getUserRecommendations = async (
    args: types.GetUserRecommendationsData,
): Promise<types.GetUserRecommendationsResponse> => {
    return await client_fetch<
        types.GetUserRecommendationsData,
        types.GetUserRecommendationsResponse
    >(`users/${args.username}/recommendations`, args);
};

/**
 * Returns user clubs
 */
export const getUserClubs = async (
    args: types.GetUserClubsData,
): Promise<types.GetUserClubsResponse> => {
    return await client_fetch<
        types.GetUserClubsData,
        types.GetUserClubsResponse
    >(`users/${args.username}/clubs`, args);
};

/**
 * Returns user's external links
 */
export const getUserExternal = async (
    args: types.GetUserExternalData,
): Promise<types.GetUserExternalResponse> => {
    return await client_fetch<
        types.GetUserExternalData,
        types.GetUserExternalResponse
    >(`users/${args.username}/external`, args);
};

/**
 * Returns Recently Added Episodes
 */
export const getWatchRecentEpisodes =
    async (): Promise<types.GetWatchRecentEpisodesResponse> => {
        return await client_fetch<never, types.GetWatchRecentEpisodesResponse>(
            'watch/episodes',
        );
    };

/**
 * Returns Popular Episodes
 */
export const getWatchPopularEpisodes =
    async (): Promise<types.GetWatchPopularEpisodesResponse> => {
        return await client_fetch<never, types.GetWatchPopularEpisodesResponse>(
            'watch/episodes/popular',
        );
    };

/**
 * Returns Recently Added Promotional Videos
 */
export const getWatchRecentPromos = async (
    args: types.GetWatchRecentPromosData,
): Promise<types.GetWatchRecentPromosResponse> => {
    return await client_fetch<
        types.GetWatchRecentPromosData,
        types.GetWatchRecentPromosResponse
    >(`watch/promos`, args);
};

/**
 * Returns Popular Promotional Videos
 */
export const getWatchPopularPromos =
    async (): Promise<types.GetWatchPopularPromosResponse> => {
        return await client_fetch<never, types.GetWatchPopularPromosResponse>(
            'watch/promos/popular',
        );
    };
